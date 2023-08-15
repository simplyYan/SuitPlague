// Crie um elemento style
const styleElement = document.createElement('style');

// Defina o conteúdo CSS que você deseja adicionar
const cssCode = `
button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  background-color: #3498db;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
}

.dbutton {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  background-color: #34495e; /* Cor de fundo escura */
  color: #ffffff; /* Texto branco */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.dinpunt {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #333;
  color: #ddd;
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* Estilos base dos títulos */
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
  font-weight: bold;
}

/* Modo claro */
h1.light, h2.light, h3.light, h4.light, h5.light, h6.light {
  color: #333333;
}

/* Modo escuro */
h1.dark, h2.dark, h3.dark, h4.dark, h5.dark, h6.dark {
  color: #ffffff;
}

/* Modo misto */
h1.mixed, h2.mixed, h3.mixed, h4.mixed, h5.mixed, h6.mixed {
  color: #888888;
}

/* Estilo base do dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Modo claro */
.dropdown .dropdown-content {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
}

/* Modo escuro */
.ddropdown .dropdown-content {
  background-color: #333333;
  border: 1px solid #666;
  color: #ffffff;
}

/* Modo misto */
.mdropdown .dropdown-content {
  background-color: #222222;
  border: 1px solid #444;
  color: #888888;
}

/* Estilo base do seletor de arquivos */
.file-selector {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
}

.file-selector input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}

/* Modo claro */
.file-selector {
  border: 1px solid #ccc;
}

/* Modo escuro */
.dfile-selector {
  border: 1px solid #666;
  color: #ffffff;
}

/* Modo misto */
.mfile-selector {
  border: 1px solid #444;
  color: #888888;
}

/* Estilo base da tabela */
.table {
  border-collapse: collapse;
  width: 100%;
}

.table th, .table td {
  padding: 8px;
  border: 1px solid #ccc;
}

/* Modo claro */
.table {
  border: 1px solid #ccc;
}

/* Modo escuro */
.dtable {
  border: 1px solid #666;
  color: #ffffff;
}

/* Modo misto */
.mtable {
  border: 1px solid #444;
  color: #888888;
}

/* Estilo base do alerta */
.alert {
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

/* Modo claro */
.alert {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  color: #333333;
}

/* Modo escuro */
.dalert {
  background-color: #333333;
  border: 1px solid #666;
  color: #ffffff;
}

/* Modo misto */
.malert {
  background-color: #222222;
  border: 1px solid #444;
  color: #888888;
}

/* Estilo base do badge */
.badge {
  padding: 6px 10px;
  border-radius: 10px;
  font-weight: bold;
}

/* Modo claro */
.badge {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  color: #333333;
}

/* Modo escuro */
.dbadge {
  background-color: #333333;
  border: 1px solid #666;
  color: #ffffff;
}

/* Modo misto */
.mbadge {
  background-color: #222222;
  border: 1px solid #444;
  color: #888888;
}

/* Estilo base do card */
.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
}

/* Modo claro */
.card {
  background-color: #ffffff;
  border: 1px solid #ccc;
  color: #333333;
}

/* Modo escuro */
.dcard {
  background-color: #333333;
  border: 1px solid #666;
  color: #ffffff;
}

/* Modo misto */
.mcard {
  background-color: #222222;
  border: 1px solid #444;
  color: #888888;
}

/* Estilo base da checkbox */
.checkbox {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox input:checked ~ .checkmark {
  background-color: #007bff;
  border: 1px solid #007bff;
}

/* Modo claro */
.checkbox .checkmark {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
}

/* Modo escuro */
.dcheckbox .checkmark {
  background-color: #333333;
  border: 1px solid #666;
}

/* Modo misto */
.mcheckbox .checkmark {
  background-color: #222222;
  border: 1px solid #444;
}

/* Estilo base do jumbotron */
.jumbotron {
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 2rem;
}

/* Modo claro */
.jumbotron {
  background-color: #f5f5f5;
  color: #333333;
}

/* Modo escuro */
.djumbotron {
  background-color: #333333;
  color: #ffffff;
}

/* Modo misto */
.mjumbotron {
  background-color: #222222;
  color: #888888;
}

/* Estilo do modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Modo claro */
.modal {
  background-color: rgba(255, 255, 255, 0.5);
}

/* Modo escuro */
.dmodal {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Modo misto */
.mmodal {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Botão de fechar */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

/* Estilo da barra de navegação */
.nav {
  display: flex;
  background-color: #f5f5f5;
  list-style-type: none;
  padding: 0;
}

.nav li {
  margin-right: 20px;
}

/* Modo claro */
.nav.light {
  background-color: #f5f5f5;
  color: #333333;
}

/* Modo escuro */
.dnav {
  background-color: #333333;
  color: #ffffff;
}

/* Modo misto */
.nav.mixed {
  background-color: #222222;
  color: #888888;
}

/* Estilo da barra de navegação */
.navbar {
  background-color: #f5f5f5;
  padding: 10px;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar li {
  display: inline-block;
  margin-right: 20px;
}

/* Modo claro */
.navbar {
  background-color: #f5f5f5;
  color: #333333;
}

/* Modo escuro */
.dnavbar {
  background-color: #333333;
  color: #ffffff;
}

/* Modo misto */
.navbar.mixed {
  background-color: #222222;
  color: #888888;
}

/* Estilo do popover */
.popover {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.popover-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.popover:hover .popover-content {
  display: block;
}

/* Modo claro */
.popover.light .popover-content {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
}

/* Modo escuro */
.dpopover .popover-content {
  background-color: #333333;
  border: 1px solid #666;
  color: #ffffff;
}

/* Modo misto */
.mpopover .popover-content {
  background-color: #222222;
  border: 1px solid #444;
  color: #888888;
}

/* Estilo da barra de progresso */
.progress {
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  width: 0;
  height: 20px;
  background-color: #007bff;
  color: #ffffff;
  text-align: center;
  line-height: 20px;
}

/* Modo claro */
.progress .progress-bar {
  background-color: #007bff;
}

/* Modo escuro */
.dprogress .progress-bar {
  background-color: #007bff;
}

/* Modo misto */
.mprogress .progress-bar {
  background-color: #007bff;
}

    `;

// Defina o conteúdo do elemento style como o código CSS
styleElement.innerHTML = cssCode;

// Adicione o elemento style ao head do documento
document.head.appendChild(styleElement);

// Definindo a função suit.set
const suit = {
    set: function (options) {
        const element = document.getElementById(options.id);
        if (element) {
            element.classList.add(options.plague);
        }
    }
};
