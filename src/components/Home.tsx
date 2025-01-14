
export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center space-y-8 p-20 mt-28">
                <h1 className="text-3xl font-bold text-center md:text-4xl ">Bienvenido a nuestra tienda</h1>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
                    <div
                        aria-label="Envios"
                        className="link-box p-6 text-white text-center rounded-lg shadow-lg hover:bg-red-900 transition transform duration-200 ease-in-out relative"
                        style={{
                            backgroundImage: "url('/electrod2.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-semibold">Envio</h2>
                            <p>Envios disponibles a cualquier lugar del pais 🚛 🇦🇷</p>
                        </div>
                    </div>

                    <div
                        aria-label="Nuevos Productos"
                        className="link-box p-6 text-white text-center rounded-lg shadow-lg hover:bg-blue-900 transition transform duration-200 ease-in-out relative"
                        style={{
                            backgroundImage: "url('/nuevos-productos.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-semibold">Nuevos Productos</h2>
                            <p>Explora nuestros nuevos artículos en stock!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}