import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div id="layout">
            <header>
                <h1 className="header">Arbeidskrav 4: Filmsøk</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <h2 className="foot">Diogo Parcerias</h2>
            </footer>
        </div>
    )
}