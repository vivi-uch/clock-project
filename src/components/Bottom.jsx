import { motion } from "framer-motion";

function Bottom() {
  const navItems = [
    { label: "Terms of Service", href: "#termsOfservice" },
    { label: "Privacy Policy", href: "#privacypolicy" },
    { label: "Refund Policy", href: "#refundpolicy" },
  ];

  return (
    <motion.div className="flex flex-col items-center text-center">
      <motion.li className="flex gap-7 mb-4">
        {navItems.map((item) => (
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            key={item.label}
            href={item.href}
            className="text-white md:font-semibold text-sm md:text-lg"
          >
            {item.label}
          </motion.a>
        ))}
      </motion.li>
      <em className="text-white text-sm md:text-lg">
        © 2024 ClockWise - Your ultimate time management companion
      </em>
    </motion.div>
  );
}

export default Bottom;
