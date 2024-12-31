import Image from 'next/image';

// ... existing code ...
<div className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    <Image 
      src="/images/hiking-bots.png"
      alt="Hiking robots in front of Mount Fuji"
      width={200}
      height={100}
      className="rounded-lg"
    />
    <h1 className="text-2xl font-bold">AI Chat History</h1>
  </div>
</div>
// ... existing code ...
