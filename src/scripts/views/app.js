/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        try {
            this._content.innerHTML = await page.render();
            await page.afterRender();
        } catch (error) {
            this._content.innerHTML = `
            <section class="content">
              <h1 class="catalouge__label">Halaman Tidak Ada</h1>
            </section>`;
            document.querySelector('footer').style.position = 'fixed';
            document.querySelector('footer').style.bottom = '0';
        }
    }
}

export default App;