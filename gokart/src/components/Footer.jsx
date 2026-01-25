import "./styles.css"
function Footer() {
    return(
        <>
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
            <div class="flex items-center justify-center space-x-4 mb-4">
                <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-sm">🏎️</span>
                </div>
                <span class="text-xl font-bold">Gyula-Ring Gokart Pálya</span>
            </div>
            <p class="text-gray-400">© 2026 Gyula-Ring Gokart Pálya. Minden jog fenntartva.</p>
        </div>
    </footer>
    </>
)}
export default Footer;