import distvessel from './dist&vessel.json';
import weather from './weather.json';
import water from './water.json';
import './App.css';
import logo from '../src/assets/logo.png';

function App() {
    return (
        <>
            <div class='bg-[#0499DA] pt-6 w-full h-4'></div>
            <div class='flex justify-between mx-12 pt-12'>
                <img src={logo} alt='logo' />
                <h1 class='text-center text-3xl font-normal text-gray-500'>
                    Cargo Handling Form
                </h1>
            </div>

            <div class='mx-12 pt-6'>
                <span class='font-semibold'>Company: </span>
                <span>Centennial Maritime Venture Pvt. Ltd.</span>
            </div>
            <div class='mx-12 pt-2'>
                <span class='font-semibold'>User: </span>
                <span>Saurabh Mishra</span>
            </div>
            <div class='mx-12 pt-2'>
                <span class='font-semibold'>Report Creation Date / Time: </span>
                <span>18-Jan-2024 12:00 PM</span>
            </div>

            <div class='grid grid-cols-4 border divide-x divide-gray-200 rounded-lg mx-12 mt-4'>
                <div class='p-3 flex flex-col'>
                    <span class='text-gray-500 text-sm font-medium'>
                        Voyage Number
                    </span>
                    <span class='text-xl'>1347445</span>
                </div>
                <div class='p-3 flex flex-col'>
                    <span class='text-gray-500 text-sm font-medium'>
                        Vessel Name
                    </span>
                    <span class='text-xl'>Ramya</span>
                </div>
                <div class='p-3 flex flex-col'>
                    <span class='text-gray-500 text-sm font-medium'>
                        Date / Time
                    </span>
                    <span class='text-xl'>2024-01-24</span>
                </div>
                <div class='p-3 flex flex-col'>
                    <span class='text-gray-500 text-sm font-medium'>Port</span>
                    <span class='text-xl'>Haifa Port</span>
                </div>
                {/* <div class='p-3 flex flex-col'>
                    <span class='text-gray-500 text-sm font-medium'>
                        Location
                    </span>
                    <span class='text-xl'>In-Transit</span>
                </div> */}
            </div>

            <div class='mx-12 mt-6'>
                <h3 class='font-semibold text-xl pl-2'>Distance and Vessel</h3>
                <dl class='divide-y divide-gray-100 mt-4'>
                    {distvessel.map((item) => (
                        <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                            <dt class='text-sm font-medium text-gray-700 ml-2'>
                                {item.name}
                            </dt>
                            <dd class='text-sm text-gray-600 pl-24'>
                                {item.id}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div class='mx-12 mt-6'>
                <h3 class='font-semibold text-base bg-[#0499DA] text-white pl-2'>
                    Weather
                </h3>
                <dl class='divide-y divide-gray-100 mt-4'>
                    {weather.map((item) => (
                        <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                            <dt class='text-sm font-medium text-gray-700 ml-2'>
                                {item.name}
                            </dt>
                            <dd class='text-sm text-gray-600 pl-24'>
                                {item.id}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div class='mx-12 mt-6'>
                <h3 class='font-semibold text-base bg-[#0499DA] text-white pl-2'>
                    Water
                </h3>
                <dl class='divide-y divide-gray-100 mt-4'>
                    {water.map((item) => (
                        <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                            <dt class='text-sm font-medium text-gray-700 ml-2'>
                                {item.name}
                            </dt>
                            <dd class='text-sm text-gray-600 pl-24'>
                                {item.id}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    );
}

export default App;
