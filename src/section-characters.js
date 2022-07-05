import { html, LitElement, css } from "lit";
import { getData } from "./helpers/getData";
import './character-card';

export class SectionCharacters extends LitElement{

    static get properties(){
        return{
            characters: {type: Array}
        }
    }

    constructor(){
        super();
        this.characters = [];
        this.getLoadData();
    }

    async getLoadData(){
        this.characters = await getData();
        console.log(this.characters[0].name);
    }

    render(){
        return html`
            ${
                this.characters.map(({id,name,image,status}) => {
                    return html`
                     <character-card
                        id=${id}
                        name=${name}
                        imgUrl=${image}
                        status=${status}
                     ></character-card>
                    `
                })
            }
        `;
    }
}

