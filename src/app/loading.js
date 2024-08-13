
const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="relative h-[200px] w-[250px] rounded-lg overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-full h-full rounded-lg z-10 bg-transparent shadow-inner transition-all duration-200"></div>
                <div className="absolute h-[60px] w-[60px] shadow-[0_-1px_0_0_#888888,0_1px_0_0_black] rounded-full" style={{ top: '12px', left: '10px' }}>
                    <div className="relative h-full w-full bg-[#555] rounded-full border border-[#ffffff1a] animate-rotate-counter-clockwise">
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l border-r border-[#ffffff1a]"></div>
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l border-r border-[#ffffff1a] rotate-[60deg]"></div>
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l border-r border-[#ffffff1a] rotate-[120deg]"></div>
                    </div>
                </div>

                <div className="absolute h-[60px] w-[60px] shadow-[0_-1px_0_0_#888888,0_1px_0_0_black] rounded-full" style={{ top: '61px', left: '60px' }}>
                    <div className="relative h-full w-full bg-[#555] rounded-full border border-[#ffffff1a] animate-rotate-clockwise">
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a]"></div>
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[60deg]"></div>
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[120deg]"></div>
                    </div>
                </div>

                <div className="absolute h-[60px] w-[60px] shadow-[0_-1px_0_0_#888888,0_1px_0_0_black] rounded-full" style={{ top: '110px', left: '10px' }}>
                    <div className="relative h-full w-full bg-[#555] rounded-full border border-[#ffffff1a] animate-rotate-counter-clockwise">
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a]"></div>
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[60deg]"></div>
                        <div className="bg-[#555] h-[16px] w-[76px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[120deg]"></div>
                    </div>
                </div>

                <div className="absolute h-[120px] w-[120px] shadow-[0_-1px_0_0_#888888,0_1px_0_0_black] rounded-full" style={{ top: '13px', left: '128px' }}>
                    <div className="relative h-full w-full bg-[#555] rounded-full border border-[#ffffff1a] animate-rotate-counter-clockwise">
                        <div className="bg-[#555] h-[16px] w-[136px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a]"></div>
                        <div className="bg-[#555] h-[16px] w-[136px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[30deg]"></div>
                        <div className="bg-[#555] h-[16px] w-[136px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[60deg]"></div>
                        <div className="bg-[#555] h-[16px] w-[136px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[90deg]"></div>
                        <div className="bg-[#555] h-[16px] w-[136px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[120deg]"></div>
                        <div className="bg-[#555] h-[16px] w-[136px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-[2px] border-l  border-r border-[#ffffff1a] rotate-[150deg]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading