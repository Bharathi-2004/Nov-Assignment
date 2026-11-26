import { Link } from 'react-router-dom';
import bg from '../assets/Background.png';
import tshirt from '../assets/Tshirt.png';
import Hdphone from '../assets/Headphones.png';
import bottle from '../assets/Bottle.png';

function Shopping(){
    return(
        <>
        <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // minHeight: '100vh',
      }}>

    <div className="flex items-center justify-between bg-white rounded-b-md shadow-2xl px-8 py-3 mx-4">

            <h2 className="text-2xl font-bold text-slate-900">Mega<span className="text-2xl font-bold text-sky-500">Store</span></h2>
            <nav className="flex gap-5 font-semibold">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
                
            </nav>
            <Link to="/" className="bg-red-600 text-white px-5 py-2 rounded-full">Logout</Link>
            
        </div>
        <div className="flex-col text-center">
            <p className="bg-blue-600 w-15 h-1.5 rounded-full mx-auto mb-3"></p>
            <h1 className="text-4xl font-bold text-slate-900">Our Latest <span className="text-2=4xl font-bold text-blue-600">Collection</span></h1>
            <p className='text-gray-700 text-md'>Discover amazing products at best prices.</p>
        </div>
        <div className='flex flex-wrap justify-center gap-10 p-5 mt-8'>
            <div className=' w-65 flex-col text-center bg-white rounded-3xl shadow-xl'>
                <img src={tshirt} 
                alt='Tshirt image'
                 className='h-50 w-60 mx-auto my-2 rounded-full'></img>
                <p className='font-semibold text-xl font-sans text-blue-750'>Premium Polo T-Shirt</p>
                <b className='text-sky-600 text-2xl font-mono font-bold shadow-2xl'>₹299 </b><s className='text-gray-700 text-mauve-700 font-semibold'>₹499</s>
                <p className='text-amber-400 font-bold text-md'>★ ★ ★ ★ ☆</p>
                <button   type="button" className="bg-sky-600 text-white px-5 py-2 rounded-3xl mb-2">🛒 Add to Card</button>
                </div>
                <div className=' w-65 flex-col text-center bg-white rounded-3xl shadow-xl'>
                <img src={Hdphone} 
                alt='Tshirt image'
                 className='h-50 w-60 mx-auto my-2 rounded-full'></img>
                <p className='font-semibold text-xl font-sans text-blue-750'>Wireless Headphones</p>
                <b className='text-sky-600 text-2xl font-mono font-bold shadow-2xl'>₹999 </b><s className='text-gray-700 text-mauve-700 font-semibold'>₹1299</s>
                <p className='text-amber-400 font-bold text-md'>★ ★ ★ ★ ⯪ </p>
                <button   type="button" className="bg-sky-600 text-white px-5 py-2 rounded-3xl mb-2">🛒 Add to Card</button>
                </div>
                <div className=' w-65 flex-col text-center bg-white rounded-3xl shadow-xl'>
                <img src={bottle} 
                alt='Tshirt image'
                 className='h-50 w-60 mx-auto my-2 rounded-full'></img>
                <p className='font-semibold text-xl font-sans text-blue-750'>Premium Polo T-Shirt</p>
                <b className='text-sky-600 text-2xl font-mono font-bold shadow-2xl'>₹399 </b><s className='text-gray-700 text-mauve-700 font-semibold'>₹499</s>
                <p className='text-amber-400 font-bold text-md'>★ ★ ★ ⯪ ☆ </p>
                <button   type="button" className="bg-sky-600 text-white px-5 py-2 rounded-3xl mb-2">🛒 Add to Card</button>
                </div>
                </div>
    <div className="text-center bg-blue-200 shadow-2xl rounded-t-3xl py-3 mt-20">

                <p className='text-gray-900'><b>© 2025 MegaStore.</b>All rights reserved.</p>
                
               </div>

    
      
    </div>

    
        
        </>
    );
}
export default Shopping;