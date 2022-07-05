import { LitElement, html, css } from 'lit';

export class CharacterCard extends LitElement {

  static get properties() {
    return {
      id: {type: Number},
      name:{type: String},
      imgUrl:{type: String},
      status:{type:String}
    };
  }

  static get styles() {
    return css`
      .card{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        width: 200px;
        min-width: 200px;
        background-color: black;
        border-radius:5px;
        margin:2rem;
        flex-wrap: wrap;
      }
      .card h2{
        color: white;
      }
      .card-container__img{
        display:flex;
        justify-content:center;
        align-items:center;
        width: 100%;
      }
      .card-container__img img{
        width: 80%;
        border-radius: 5px;
      }
      .card p{
        color:white;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <h2>${this.name}</h2>
        <div class="card-container__img">
          <img src="${this.imgUrl}" alt="Character Picture">
        </div>
        <p>Status: ${this.status}</p>
      </div>
    `;
  }
}
customElements.define('character-card', CharacterCard);
