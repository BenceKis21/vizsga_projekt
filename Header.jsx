import "./styles.css"
function Header(){
    return(
        <>
<header class="bg-red-600 text-white shadow-lg">
        <div class="container mx-auto px-4 py-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span class="text-red-600 font-bold text-xl">🏎️</span>
                    </div>
                    <h1 class="text-3xl font-bold">Gokart Pálya</h1>
                </div>
                <nav class="hidden md:flex space-x-6">
                    <a href="index.html" class="hover:text-red-200 transition-colors">Főoldal</a>
                    <a href="arak.html" class="text-red-200 font-semibold">Árak</a>
                    <a href="galeria.html" class="hover:text-red-200 transition-colors">Galéria</a>
                    <a href="foglalas.html" class="hover:text-red-200 transition-colors">Foglalás</a>
                    <a href="kapcsolat.html" class="hover:text-red-200 transition-colors">Kapcsolat</a>
                </nav>
            </div>
        </div>
    </header>
    </>
)}

export default Header;