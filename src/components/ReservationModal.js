"use_client"
import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ReservationModal = ({ productName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        quantity: 1,
        customization: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        time: '',
        wantInvoice: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    const handleIncrement = () => {
        setFormData({
            ...formData,
            quantity: formData.quantity + 1,
        });
    };

    const handleDecrement = () => {
        if (formData.quantity > 1) {
            setFormData({
                ...formData,
                quantity: formData.quantity - 1,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
        console.log(formData);
        // Cerrar el modal después de enviar el formulario
        setIsOpen(false);
    };

    return (
        <div className='w-full'>
            <button onClick={() => setIsOpen(true)} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-light text-2xl py-2 px-4 rounded border border-amber-600">
                Reservar 
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4 text-center text-amber-500">Reserva de {productName}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 flex items-center text-center mx-auto">
                                <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2 mx-auto">Cantidad</label>
                                <button type="button" onClick={handleDecrement} className="text-amber-500 focus:outline-none focus:text-amber-700">
                                    <AiOutlineMinus />
                                </button>
                                <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} className="w-12 border border-gray-300 rounded-md p-2 text-center" min="1" required />
                                <button type="button" onClick={handleIncrement} className="text-amber-500 focus:outline-none focus:text-amber-700">
                                    <AiOutlinePlus />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Teléfono</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Dirección (opcional)</label>
                                <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>Lunes a Sabados de 12:30 a 14:30 y de 16:30 a 20:30</div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Fecha</label>
                                    <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Hora</label>
                                    <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <input type="checkbox" id="wantInvoice" name="wantInvoice" checked={formData.wantInvoice} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="wantInvoice" className="text-gray-700 font-bold">¿Desea factura?</label>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="customization" className="block text-gray-700 font-bold mb-2">Personalización</label>
                                <textarea id="customization" name="customization" value={formData.customization} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Enviar</button>
                                <button onClick={() => setIsOpen(false)} className="ml-2 text-gray-600 font-semibold">Cerrar</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReservationModal;
