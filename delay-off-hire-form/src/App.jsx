import distvessel from './dist&vessel.json';
import weather from './weather.json';
import water from './water.json';
import './App.css';

function App() {
    return (
        <>
            <div class='bg-[#0499DA] pt-6 w-full h-4'></div>
            <div class='flex justify-between mx-12 pt-12'>
                <img src='assets/logo.png' alt='logo' />
                <h1 class='text-center text-3xl font-normal text-gray-500'>
                    Delay/Off-Hire Notice
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

            <div class='grid grid-cols-5 border divide-x divide-gray-200 rounded-lg mx-12 mt-4'>
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
                    <span class='text-gray-500 text-sm font-medium'>
                        Delay Start
                    </span>
                    <span class='text-xl'>5:00 PM</span>
                </div>
                <div class='p-3 flex flex-col'>
                    <span class='text-gray-500 text-sm font-medium'>
                        Delay End
                    </span>
                    <span class='text-xl'>7:00 PM</span>
                </div>
            </div>

            <div class='mx-12 mt-6'>
                {/* <h3 class='font-semibold text-xl pl-2'>Distance and Vessel</h3> */}
                <dl class='divide-y divide-gray-100 mt-4'>
                    <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                        <dt class='text-sm font-medium text-gray-700 ml-2'>
                            Delay Duration
                        </dt>
                        <dd class='text-sm text-gray-600 pl-24'>2 Hours</dd>
                    </div>
                    <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                        <dt class='text-sm font-medium text-gray-700 ml-2'>
                            Miles
                        </dt>
                        <dd class='text-sm text-gray-600 pl-24'>100</dd>
                    </div>
                    <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                        <dt class='text-sm font-medium text-gray-700 ml-2'>
                            Delay Type
                        </dt>
                        <dd class='text-sm text-gray-600 pl-24'>
                            Planned Off Hire
                        </dd>
                    </div>
                    <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                        <dt class='text-sm font-medium text-gray-700 ml-2'>
                            Reason for Delay
                        </dt>
                        <dd class='text-sm text-gray-600 pl-24'>
                            Distress Call
                        </dd>
                    </div>
                    <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                        <dt class='text-sm font-medium text-gray-700 ml-2'>
                            Remarks
                        </dt>
                        <dd class='text-sm text-gray-600 pl-24'>none</dd>
                    </div>
                    <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                        <dt class='text-sm font-medium text-gray-700 ml-2'>
                            Fuel Type
                        </dt>
                        <dd class='text-sm text-gray-600 pl-24'>Petrol</dd>
                    </div>
                    <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                        <dt class='text-sm font-medium text-gray-700 ml-2'>
                            Quantity Lifted
                        </dt>
                        <dd class='text-sm text-gray-600 pl-24'>100 Kg</dd>
                    </div>
                    <div class='py-1 sm:grid sm:grid-cols-2 sm:gap-4'>
                        <dt class='text-sm font-medium text-gray-700 ml-2'>
                            Master's Name
                        </dt>
                        <dd class='text-sm text-gray-600 pl-24'>John Dow</dd>
                    </div>
                </dl>
            </div>

            {/* <div class='mx-12 mt-6'>
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
            </div> */}
        </>
    );
}

export default App;
