import tkinter as tk
from tkinter import messagebox
import subprocess

def save_credentials():
    username = username_entry.get()
    password = password_entry.get()

    if not username or not password:
        messagebox.showerror("Erro", "Preencha ambos os campos!")
        return
    
    if len(password) <= 9:
        messagebox.showerror("Erro", "A senha deve ter mais de 9 caracteres!")
        return

    with open("name.plague", "w") as name_file:
        name_file.write(username)

    with open("pwd.plague", "w") as pwd_file:
        pwd_file.write(password)

    messagebox.showinfo("Welcome", "Your account has been created. By using any SwankyNoob service, you already agree to these terms.")
    
    # Simulação de execução do arquivo SuitPlague.exe
    # Coloque aqui o código para executar o programa desejado

    try:
        subprocess.run("SuitPlague.exe", check=True)
    except FileNotFoundError:
        messagebox.showerror("Erro", "Arquivo 'SuitPlague.exe' não encontrado.")

    root.destroy()

# Configuração da janela principal
root = tk.Tk()
root.title("SuitPlague")
root.geometry("400x200")
root.configure(bg="black")

# Label e Entry para o campo de nome de usuário
username_label = tk.Label(root, text="Name of provider", fg="white", bg="black")
username_label.pack()
username_entry = tk.Entry(root, bg="gray")
username_entry.pack(padx=10, pady=5)

# Label e Entry para o campo de senha
password_label = tk.Label(root, text="Provider password", fg="white", bg="black")
password_label.pack()
password_entry = tk.Entry(root, bg="gray", show="*")
password_entry.pack(padx=10, pady=5)

# Botão para salvar os dados e executar o programa
save_button = tk.Button(root, text="Connect to the provider", command=save_credentials)
save_button.pack(pady=20)

root.mainloop()
