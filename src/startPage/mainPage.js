import {LitElement, css, html} from 'lit';

export class mainPage extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    constructor() {
        super();
    }

    static styles = css // language=CSS
        `
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #f8f8f8;
            height: 64px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 4;
            transition: all 0.5s ease-out;
        }

        .headerShadow {
            box-shadow: 0 20px 30px 0 rgba(28,9,80,.10);
        }

        .headerLeft {
            padding-left: 32px;
        }

        .headerIcon {
            width: 42px;
            height: 42px;
        }

        .headerCenter {

        }

        .headerText {
            font-size: 40px;
        }

        .headerRight {
            padding-right: 32px;
        }

        .headerUser {
            width: 42px;
            height: 42px;
        }

        .shadowBox {
            z-index:8;
            position: absolute;
            width: 100%;
            height: 100vh;
            background-color: #000000;
            opacity: 0.5;
        }
        
        
        
        
  `;

    // Render the UI as a function of component state
    render() {
        return html`
            <div class="header" id="header">
                <div class="headerLeft">
                <img src="src/images/icon_gachinder.svg" class="headerIcon">
                </div>
                <div class="headerCenter">
                <span id="rainbow" class="headerText">Gachinder</span>
                </div>
                <div class="headerRight">
                <img src="src/images/icon-user-149071.svg" class="headerUser">
                </div>
            </div>
            
            
            
            
            
            
            
            
        `;
    }
}
customElements.define('main-page', mainPage);