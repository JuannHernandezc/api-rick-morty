export const getData = async () => {
    const apiUrl = 'https://rickandmortyapi.com/api';
    const characterParameter = '/character';
    try {
        const answer = await fetch(`${apiUrl}${characterParameter}`); 
        const {results} = await answer.json();
        if(answer.status !== 200){
          throw new Error(`Error en la peticion HTTP ${answer.status}`);
        }
        const characters = results.map(({id, name, image, status}) => {
            return {
                id, 
                name,
                image, 
                status
            };
        });
      return characters;
      } catch (error) {
          console.log(error.message);
      }
}