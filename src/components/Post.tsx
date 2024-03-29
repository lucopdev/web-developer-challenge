import PostProps from '../interface/postProps';

function Post({ userInputs: { name, message, imageUrl } }: PostProps) {
  return (
    <div className="flex items-start w-[516px] mt-[8px] mb-[16px] bg-mainColor-dark  border border-mainColor-lightGrey">
      <div className="flex mt-[56px]">
        <div className="w-[88px] h-[88px] ml-[24px] flex items-center justify-center bg-cover bg-center mb-[16px] rounded-[36px] border border-mainColor-lightGrey">
          <img src={imageUrl == '' ? 'src/assets/image.png' : imageUrl} />
        </div>
        <div className="w-[348px] text-[16px] ml-[32px] mb-[32px]">
          <p className="w-[348px] text-[16px] mb-[24px] leading-[1.25]">{message}</p>
          <p className="text-[12px]">Enviado por</p>
          <h1 className="text-[14px]">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Post;