import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const CartComponent: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: 'IPA', price: 5, quantity: 2 },
        { id: 2, name: 'Stout', price: 6, quantity: 1 },
    ]);

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center mb-2 animate-fade-in"
                        >
                            <span>{item.name} x{item.quantity}</span>
                            <span>${item.price * item.quantity}</span>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700 transition-colors duration-300 p-1"
                            >
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                    <div className="mt-4 pt-2 border-t border-amber-600">
                        <p className="text-xl font-bold">Total: ${total}</p>
                    </div>
                    <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 transition-colors duration-300 p-2 rounded">
                        Proceder al pago
                    </button>
                </>
            )}
        </div>
    );
};

export default CartComponent;