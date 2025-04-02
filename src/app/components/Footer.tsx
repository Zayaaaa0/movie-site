export default function Footer() {
  return (
    <div className="h-[220px] bg-[#4338CA] w-screen flex gap-[120px] text-[#FAFAFA] justify-center p-[40px] mt-[60px]">
      <div className="flex flex-col items-start self-stretch ">
        <div className="flex gap-[8px]">
          <img src="/f.png" alt="" className="w-[20px] h-[20px]" />
          <p className="font-bold text-[16px] leading-5 tracking-[0.32px] italic">
            Movie Z
          </p>
        </div>
        <p>© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex gap-[96px] justify-end w-[913px] items-start ">
        <div className="flex flex-col ]">
          <div>Contact Information</div>
          <div>
            <div className="flex gap-[12px]">
              <div className="flex items-center">
                <img src="/Wifi icon.svg" alt="" />
              </div>
              <div>
                <p>Email:</p>
                <p>support@movieZ.com</p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div className="flex items-center">
                <img src="/phone.svg" alt="" />
              </div>
              <div>
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div>
            <p>Follow us </p>
          </div>
          <div className="flex gap-2">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
}
