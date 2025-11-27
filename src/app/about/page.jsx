import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-base-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            About Our Pet Store
          </h1>
          <p className=" max-w-2xl mx-auto">
            We are passionate about connecting adorable pets with loving homes.
            Our mission is to ensure safe, trustworthy and joyful adoption for
            everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold  mb-4">Our Mission</h2>
          <p className=" leading-relaxed">
            We believe every pet deserves a caring home. Our platform ensures
            transparent processes, verified sellers and healthy pets. We&apos;re
            here to make your adoption journey easy, safe and enjoyable.
          </p>
        </div>

        <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
          <Image
            src="https://i.ibb.co.com/p6kQ6vYd/image-2-1.png"
            alt="Happy Pets"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center  mb-10">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-base-200 p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src="https://i.ibb.co.com/G3NhDzdB/image-3-1.png"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Team Member {item}</h3>
                <p className="text-gray-600 text-sm">Pet Care Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
