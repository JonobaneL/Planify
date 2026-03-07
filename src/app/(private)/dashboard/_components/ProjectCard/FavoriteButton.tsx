'use client';

import { FaRegStar, FaStar } from 'react-icons/fa';
import { toast } from 'sonner';

import { addProjectToFavorite } from '../../actions';

type FavoriteButtonProps = {
  projectId: string;
  favorite?: boolean;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  projectId,
  favorite,
}) => {
  const handleFavorite = async () => {
    toast.promise(addProjectToFavorite(projectId, !favorite), {
      loading: 'Adding project to favorites...',
      success: (data: { name: string; favorite: boolean }) => {
        return {
          description: `${data.name} has been ${data.favorite ? 'added to' : 'removed from'} favorites`,
          message: 'Congrats!',
        };
      },
      error: 'Failed to add project to favorites',
    });
  };
  return (
    <button onClick={handleFavorite}>
      {favorite ? (
        <FaStar size={18} className="text-primary" />
      ) : (
        <FaRegStar className="text-primary" />
      )}
    </button>
  );
};

export default FavoriteButton;
