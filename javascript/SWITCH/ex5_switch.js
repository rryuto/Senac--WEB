var perfil = "aluno";

switch(perfil){
    case "admin":
        console.log("Olá, administrador vc pode td");
        break;
    case "professor":
        console.log("Olá, professor, vc pode menos que o adimn");
        break;
    case "aluno":
        console.log("Olá, aluno vc pode existir");
        break;
    default:
        console.log("Olá, convidado");
        break;
}