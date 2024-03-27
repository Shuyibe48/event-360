import { cn } from "tailwind-cn";

const Container = ({children, className}) => {
    return (
        <div className={cn("h-full w-full max-w-[1300px] px-[20px] mx-auto", className)}>
            {children}
        </div>
    );
};

export default Container;