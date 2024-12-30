import Heading from '../../components/Heading';
import useMenu from '../../Hooks/useMenu';
import PopularItemCard from '../../shared/PopularItemCard';

const FromOurMenu = () => {
   const [menu,loading] = useMenu();
   if(loading){
    <span className="loading loading-spinner loading-lg"></span>
}
   const popularItems = menu?.data?.filter(item => item.category === "popular");
  
    return (
        <div className='max-w-screen-xl my-24 mx-auto'>
            <Heading title="---Check it out---" subTitle="FROM OUR MENU" />
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    popularItems?.map(item => <PopularItemCard key={item._id} items={item} />)
                }
            </div>
            <div className='text-center my-10'>
                <button className='btn btn-outline uppercase border-0 border-b-4'>View full menu</button>
            </div>
        </div>
    );
};

export default FromOurMenu;