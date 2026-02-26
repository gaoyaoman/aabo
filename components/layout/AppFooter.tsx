export default function AppFooter() {
  return (
    <footer className="flex h-[200px] w-full mt-auto">
      <div className="w-[100px] bg-[#e3a348] shrink-0"></div>
      <div className="flex-1 bg-[#4e416e] flex items-center pl-10">
        <ul className="flex flex-col gap-5 list-none p-0 m-0">
          <li><a href="#" className="text-white opacity-80 hover:opacity-100 no-underline text-base transition-opacity">联系我们</a></li>
          <li><a href="#" className="text-white opacity-80 hover:opacity-100 no-underline text-base transition-opacity">市场合作</a></li>
          <li><a href="#" className="text-white opacity-80 hover:opacity-100 no-underline text-base transition-opacity">版权所属 © 2026</a></li>
        </ul>
      </div>
    </footer>
  );
}
