export default function ContactPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="text-center py-16 bg-base-100 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions? Need help? We’re always here for you. Send us a
          message and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-base-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
          <p className="text-gray-600">123 Pet Street, Dhaka, Bangladesh</p>
        </div>

        <div className="bg-base-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
          <p className="text-gray-600">+880 1234-567890</p>
        </div>

        <div className="bg-base-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
          <p className="text-gray-600">support@petstore.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-base-100 p-8 rounded-xl shadow max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 ">Send Us a Message</h2>

          <form className="grid gap-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="w-full border rounded-lg px-4 py-2 h-28 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
