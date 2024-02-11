import Image from "next/image";

interface AvatarProps {
    hasBorder? :Boolean
    isLarge ?: Boolean
}

const Avatar = ({hasBorder,isLarge}:AvatarProps) => {
  return (
    <div
      className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        ${isLarge ? 'h-32' : 'h-12'}
        ${isLarge ? 'w-32' : 'w-12'}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="Avatar"
      
        src={'/images/placeholder.png'}
      />
    </div>
  );
  
}

export default Avatar