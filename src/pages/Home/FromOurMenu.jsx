import Heading from '../../components/Heading';
import useMenu from '../../Hooks/useMenu';
import MenuItemCard from '../../shared/MenuItemCard';

const FromOurMenu = () => {
   const [menu] = useMenu();
   const popularItems = menu?.data?.filter(item => item.category === "popular");
  
    return (
        <div className='max-w-screen-xl my-24 mx-auto'>
            <Heading title="---Check it out---" subTitle="FROM OUR MENU" />
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    popularItems?.map(menuItem => <MenuItemCard key={menuItem._id} menuItem={menuItem} />)
                }
            </div>
            <div className='text-center my-10'>
                <button className='btn btn-outline uppercase border-0 border-b-4'>View full menu</button>
            </div>
        </div>
    );
};

export default FromOurMenu;