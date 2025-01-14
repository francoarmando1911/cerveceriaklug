import React, { useState } from 'react';
import { Menu, ShoppingCart, Home } from 'lucide-react';
import CartComponent from './CartComponent';

const Header: React.FC = () => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    return (
        <header className="bg-amber-800 text-white p-4 fixed w-full z-10 top-0">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col md:flex-row md:justify-between items-center p-4 space-y-4 md:space-y-0">
                <h1 className="text-4xl font-bold animate-fade-in-down">
                    Cervecería Klug Gebräu
                </h1>
                <nav className="flex space-x-4">
                    <button
                        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                        className="text-white hover:bg-amber-700 transition-colors duration-300 p-2 rounded"
                    >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Ver categorías</span>
                    </button>
                    <button
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="text-white hover:bg-amber-700 transition-colors duration-300 p-2 rounded"
                    >
                        <ShoppingCart className="h-6 w-6" />
                        <span className="sr-only">Ver carrito</span>
                    </button>
                    <a href="/" className="text-white hover:bg-amber-700 transition-colors duration-300 p-2 rounded">
                        <Home className="h-6 w-6" />
                        <span className="sr-only">Ir a inicio</span>
                    </a>
                </nav>
            </div>
            {isCategoriesOpen && (
                <div className="absolute left-0 top-full w-64 bg-amber-800 p-4 animate-fade-in">
                    <nav className="flex flex-col space-y-4">
                        <a href="/cervezas" className="text-lg hover:text-amber-300 transition-colors duration-300">Cervezas</a>
                        <a href="/comidas" className="text-lg hover:text-amber-300 transition-colors duration-300">Comidas</a>
                        <a href="/promociones" className="text-lg hover:text-amber-300 transition-colors duration-300">Promociones</a>
                    </nav>
                </div>
            )}
            {isCartOpen && (
                <div className="absolute right-0 top-full w-64 bg-amber-800 p-4 animate-fade-in">
                    <CartComponent />
                </div>
            )}
        </header>
    );
};

export default Header;