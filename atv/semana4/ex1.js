// Função para exibir os campos específicos de Professor ou Aluno
document.addEventListener('DOMContentLoaded', function () {
    toggleFields();
    document.querySelectorAll('input[name="tipo"]').forEach(function (radio) {
        radio.addEventListener('change', toggleFields);
    });
});

function toggleFields() {
    const isProfessor = document.getElementById('professor').checked;
    document.getElementById('professorFields').style.display = isProfessor ? 'block' : 'none';
    document.getElementById('alunoFields').style.display = isProfessor ? 'none' : 'block';
}

// Função para validar o nome
function validateNome() {
    const nome = document.getElementById('nome').value.trim();
    const regex = /^[A-Za-z]+\s[A-Za-z]+$/;
    const nomeError = document.getElementById('nomeError');
    if (!regex.test(nome)) {
        nomeError.textContent = 'Nome inválido. Ex: João Silva';
        nomeError.style.display = 'block';
        return false;
    }
    nomeError.style.display = 'none';
    return true;
}

// Função para validar o email
function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const emailError = document.getElementById('emailError');
    if (!regex.test(email)) {
        emailError.textContent = 'Email inválido. Ex: fulano@exemplo.com';
        emailError.style.display = 'block';
        return false;
    }
    emailError.style.display = 'none';
    return true;
}

// Função para validar a data de nascimento
function validateDataNascimento() {
    const dataNascimento = document.getElementById('dataNascimento').value;
    const dataNascimentoError = document.getElementById('dataNascimentoError');
    if (!dataNascimento) {
        dataNascimentoError.textContent = 'Data de nascimento é obrigatória.';
        dataNascimentoError.style.display = 'block';
        return false;
    }
    dataNascimentoError.style.display = 'none';
    return true;
}

// Função para validar o telefone fixo
function validateTelefoneFixo() {
    const telefoneFixo = document.getElementById('telefoneFixo').value.trim();
    const regex = /^\(\d{2}\)\d{4}-\d{4}$/;
    const telefoneFixoError = document.getElementById('telefoneFixoError');
    if (!regex.test(telefoneFixo)) {
        telefoneFixoError.textContent = 'Telefone fixo inválido. Ex: (11)1234-5678';
        telefoneFixoError.style.display = 'block';
        return false;
    }
    telefoneFixoError.style.display = 'none';
    return true;
}

// Função para validar o telefone celular
function validateTelefoneCelular() {
    const telefoneCelular = document.getElementById('telefoneCelular').value.trim();
    const regex = /^\(\d{2}\)\d{5}-\d{4}$/;
    const telefoneCelularError = document.getElementById('telefoneCelularError');
    if (!regex.test(telefoneCelular)) {
        telefoneCelularError.textContent = 'Telefone celular inválido. Ex: (11)91234-5678';
        telefoneCelularError.style.display = 'block';
        return false;
    }
    telefoneCelularError.style.display = 'none';
    return true;
}

// Função para validar a área de atuação
function validateArea() {
    const area = document.getElementById('area').value.trim();
    const areaError = document.getElementById('areaError');
    if (area === '') {
        areaError.textContent = 'Área de atuação é obrigatória.';
        areaError.style.display = 'block';
        return false;
    }
    areaError.style.display = 'none';
    return true;
}

// Função para validar a matrícula do professor
function validateMatriculaProfessor() {
    const matriculaProfessor = document.getElementById('matriculaProfessor').value.trim();
    const matriculaProfessorError = document.getElementById('matriculaProfessorError');
    if (matriculaProfessor.length !== 5) {
        matriculaProfessorError.textContent = 'Matrícula do professor deve ter 5 dígitos.';
        matriculaProfessorError.style.display = 'block';
        return false;
    }
    matriculaProfessorError.style.display = 'none';
    return true;
}

// Função para validar a matrícula do aluno
function validateMatriculaAluno() {
    const matriculaAluno = document.getElementById('matriculaAluno').value.trim();
    const matriculaAlunoError = document.getElementById('matriculaAlunoError');
    if (matriculaAluno.length !== 10) {
        matriculaAlunoError.textContent = 'Matrícula do aluno deve ter 10 dígitos.';
        matriculaAlunoError.style.display = 'block';
        return false;
    }
    matriculaAlunoError.style.display = 'none';
    return true;
}

// Função para validar o curso do aluno
function validateCurso() {
    const curso = document.getElementById('curso').value.trim();
    const cursoError = document.getElementById('cursoError');
    if (curso === '') {
        cursoError.textContent = 'Curso é obrigatório.';
        cursoError.style.display = 'block';
        return false;
    }
    cursoError.style.display = 'none';
    return true;
}

// Função para validar todo o formulário
function validateForm() {
    const isProfessor = document.getElementById('professor').checked;

    let valid = true;
    valid &= validateNome();
    valid &= validateEmail();
    valid &= validateDataNascimento();
    valid &= validateTelefoneFixo();
    valid &= validateTelefoneCelular();

    if (isProfessor) {
        valid &= validateArea();
        valid &= validateMatriculaProfessor();
    } else {
        valid &= validateCurso();
        valid &= validateMatriculaAluno();
    }

    return !!valid;  // Retorna false se houver erros
}
