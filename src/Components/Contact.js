import Button from "./Button";

const Contact = () => {
  return (
    <div className="px-4 py-10 my-16">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl">
          Connect With Us
        </h1>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
  );
};

export default Contact;
