import Image from 'next/image';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full w-full flex-1">
      <div className="relative hidden h-full w-[60%] lg:block">
        <Image
          className="h-dvh w-full object-cover"
          src="/assets/backgrounds/publicBackground.jpg"
          alt="backgroundImage"
          width="800"
          height="800"
          priority={true}
        />
      </div>
      <div className="flex h-dvh w-full items-center justify-center lg:w-[40%]">
        {children}
      </div>
    </main>
  );
}
