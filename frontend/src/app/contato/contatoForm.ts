export class ContatoForm {
    formNome: String
    formEmail: String
    formEscola: String
    formEstado: String
    formCidade: String
    formTelefone: String
    formMensagem: String

    constructor(formNome: String, formEmail: String, formEscola: String, formEstado: String, formCidade: String, formTelefone: String, formMensagem: String) {
        this.formNome = formNome
        this.formEmail = formEmail
        this.formEscola = formEscola
        this.formEstado = formEstado
        this.formCidade = formCidade
        this.formTelefone = formTelefone
        this.formMensagem = formMensagem
    }
}