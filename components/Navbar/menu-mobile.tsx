import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { UserModel } from '@/models/User';
import { IconDeviceGamepad2, IconMenu2 } from '@tabler/icons-react';
import { ChevronDown, FileText, HelpCircle, Home, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SignInDialog, SignUpForm } from '../Login';
import './styles.css';

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  { icon: <Home className="w-6 h-6" />, label: 'Trang chủ', href: '/' },
  {
    icon: <FileText className="w-6 h-6" />,
    label: 'Luyện tập',
    subItems: [
      { label: 'Nhận biết', href: '/web-dev' },
      { label: 'Vận dụng', href: '/interface-design' },
      { label: 'Thông hiểu', href: '/seo' },
      { label: 'Tổng hợp', href: '/branding' },
    ],
  },
  {
    icon: <IconDeviceGamepad2 stroke={2} className="w-6 h-6" />,
    label: 'Games',
    subItems: [
      { label: 'Điền vào chỗ trống', href: '/games/dien-vao-cho-trong' },
      { label: 'Tìm hai ô giống nhau', href: '/games/tim-hai-o-giong-nhau' },
      { label: 'Sắp xếp thành ngữ', href: '/games/sap-xep-cau' },
      { label: 'Trắc nghiệm', href: '/games/trac-nghiem' },
      { label: 'Nối cặp', href: '/games/noi-cap' },
    ],
  },
  { icon: <Settings className="w-6 h-6" />, label: 'Settings' },
  { icon: <HelpCircle className="w-6 h-6" />, label: 'Help' },
];

export function MobileMenu({
  user,
}: {
  user: {
    data: UserModel | null;
    loading: boolean;
  };
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="p-4" onClick={() => setOpen(true)}>
        <IconMenu2 stroke={2} className="text-white" />
      </div>
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <div className="p-4">
            {user?.data && (
              <div className=" mb-8 flex items-center">
                <Avatar className="w-16 h-16 border-2 border-primary-foreground">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{user.data?.name}</h2>
                  <p className="text-sm opacity-75">{user.data?.email}</p>
                </div>
              </div>
            )}
            <nav>
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.subItems ? (
                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                          <div className="flex items-center space-x-4">
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                          </div>
                          <ChevronDown className="w-5 h-5" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="CollapsibleContent">
                          <ul className="mt-2 ml-10 space-y-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.href}
                                  className="block p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        href={item.href || ''}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200"
                      >
                        {item.icon}
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {!user.data && (
            <div className="flex justify-around">
              <SignInDialog />
              <SignUpForm />
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}