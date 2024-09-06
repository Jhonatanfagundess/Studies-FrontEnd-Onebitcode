const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
  }

  const {job, parents} = person //O JSS sabe que queremos quebrar o objeto para desestruturar

  console.log(job, parents)


  const [father , Mother] = parents //No array é pego pela ordem pelas strings no array

  console.log(father,Mother)

//Na função podemos quebrar da mesma forma
  function createUser ({name,job,parents}){
    const id = Math.floor(Math.random() * 1000)
    return {
        id,
        name,
        job,
        parents
    }
  }

  const Jhonatan = createUser(person)
  console.log(Jhonatan)

