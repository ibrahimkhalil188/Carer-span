import UseServices from '../../Shared/CustomHook/UseServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = UseServices()
    return (
        <div>
            <h1 className='text-4xl p-12 text-center text-[#066163] font-mono font-semibold bg-[#F2F2F2]'>Services</h1>
            <div className='container mx-auto grid grid-cols-3 gap-4'>
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;