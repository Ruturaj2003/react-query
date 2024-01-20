import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });

  const { isLoading, isError } = result;
  const tasks = result.data?.data?.taskList || [];
  console.log(isError);
  console.log(tasks);
  if (isLoading) {
    return <h4>Loading Data Please Wait</h4>;
  }
  if (isError) {
    return <h4>Something went wrong</h4>;
  }
  return (
    <div className="items">
      {tasks.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
