import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    debugger;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "1cc57751-dbb8-446d-96b3-e05e8fac2335",
          ...data,
        }),
      });

      const json = await response.json();
      if (json.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        setResult("Failed to send message.");
      }
    } catch (error) {
      setResult("An unexpected error occurred.");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <section className="text-white pt-0 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center">
        <div>
          <p className="text-slate-300 leading-relaxed text-base">
            Whether you have a project in mind or just want to say hi, feel free
            to reach out.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-md  space-y-5"
        >
          <div className="max-w-xl">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded-md bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 text-white placeholder-slate-400"
              placeholder="you@example.com"
            />
          </div>

          <div className="max-w-xl">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full p-2 rounded-md bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 text-white placeholder-slate-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 hover:scale-[1.03] text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {result && (
            <p
              className={`mt-2 ${
                result.includes("success") ? "text-green-400" : "text-red-500"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
export default Contact;
