
let objEstudiante1 = 
    {
    id: '61551130',
    nombre: 'Alexander Varela',
    Campus: 'CUTEC SPS SC',
    Asignatura: 'Programacion IV',
    nota: '50',
    condicion: 'REP'
}
let objEstudinte2 =
    {
        id: '62111620',
        nombre: 'Carlos epeda',
        Campus: 'CUTEC SPS SC',
        Asignatura: 'Programacion IV',
        nota: '58',
        condicion: 'REP'
    }
let objEstudinte3 =
    {
        id: '621134354',
        nombre: 'Juan Escoto',
        Campus: 'CUTEC SPS SC',
        Asignatura: 'Programacion IV',
        nota: '54',
        condicion: 'REP'
    }
let objEstudinte4 =
    {
        id: '621134354',
        nombre: 'Oto Rodriguez',
        Campus: 'CUTEC SPS SC',
        Asignatura: 'Programacion IV',
        nota: '60',
        condicion: 'APB'
    }

let arrayEstudiante = [objEstudiante1, objEstudinte2, objEstudinte3,objEstudinte4] 
let resultadoFiltro = arrayEstudiante.find(estudiante=> estudiante.condicion=='APB')
console.log(resultadoFiltro) 