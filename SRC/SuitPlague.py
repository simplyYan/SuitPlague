import tkinter as tk
import socket
import threading

# Configurações globais
LOCAL_HOST = socket.gethostbyname(socket.gethostname())
PORT = 5555
BUFFER_SIZE = 1024
NETWORK_NAME_FILE = "name.plague"
PASSWORD_FILE = "pwd.plague"

# Variáveis para armazenar o nome e a senha da conexão a ser criada
network_name = ""
password = ""

# Função para obter o endereço IP público
def get_public_ip():
    try:
        response = requests.get("https://api64.ipify.org?format=json")
        data = response.json()
        return data["ip"]
    except requests.exceptions.RequestException:
        return None

# Definir o endereço IP local ou público, dependendo do cenário
LOCAL_HOST = socket.gethostbyname(socket.gethostname())  # Para rede local
# LOCAL_HOST = get_public_ip()  # Para rede global

if LOCAL_HOST is None:
    print("Não foi possível obter o endereço IP público.")
    exit(1)

# Função para aguardar conexão de outros clientes
def wait_for_connections():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((LOCAL_HOST, PORT))
    server_socket.listen(1)
    print("Aguardando conexão de outro cliente...")

    conn, addr = server_socket.accept()
    print(f"Conexão estabelecida com {addr}")

    # Verificar se o cliente está conectado à rede correta
    client_network_name = conn.recv(BUFFER_SIZE).decode("utf-8")
    if client_network_name != network_name:
        conn.close()
        print("Cliente tentou se conectar a uma rede inválida.")
        return

    # Verificar a senha do cliente
    client_password = conn.recv(BUFFER_SIZE).decode("utf-8")
    if client_password != password:
        conn.close()
        print("Cliente inseriu uma senha inválida.")
        return

    # Iniciar uma thread para receber mensagens do cliente conectado
    threading.Thread(target=receive_messages, args=(conn,)).start()

# Função para receber mensagens do cliente conectado
def receive_messages(conn):
    while True:
        try:
            data = conn.recv(BUFFER_SIZE)
            if not data:
                break

            print(data.decode("utf-8"))

        except Exception as e:
            print(f"Erro na comunicação com o cliente: {e}")
            break

    conn.close()

# Função para conectar à rede
def join_network():
    global network_name, password
    network_name = network_entry.get()
    password = password_entry.get()

    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect((LOCAL_HOST, PORT))

    # Enviar o nome da rede para conectar-se
    client_socket.send(network_name.encode("utf-8"))

    # Enviar a senha
    client_socket.send(password.encode("utf-8"))

    client_socket.close()

# Criar a GUI
root = tk.Tk()
root.title("SuitPlague Core")
root.geometry("400x300")

# Ler o nome e a senha da conexão a ser criada a partir dos arquivos
with open(NETWORK_NAME_FILE, "r") as f:
    network_name = f.readline().strip()

with open(PASSWORD_FILE, "r") as f:
    password = f.readline().strip()

network_label = tk.Label(root, text="Nome da Rede:")
network_label.pack(pady=5)

network_entry = tk.Entry(root)
network_entry.insert(tk.END, network_name)
network_entry.pack(pady=5, padx=10, fill=tk.X)

password_label = tk.Label(root, text="Senha:")
password_label.pack(pady=5)

password_entry = tk.Entry(root, show="*")
password_entry.insert(tk.END, password)
password_entry.pack(pady=5, padx=10, fill=tk.X)

join_button = tk.Button(root, text="Entrar na Rede", command=join_network)
join_button.pack(pady=5)

# Iniciar a thread para aguardar a conexão de outro cliente
server_thread = threading.Thread(target=wait_for_connections)
server_thread.start()

root.mainloop()

