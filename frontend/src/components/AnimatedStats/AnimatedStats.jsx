import { useEffect, useRef, useState } from "react";
import "./AnimatedStats.css";

const statsData = [
  { id: 1, target: 5, suffix: "k", label: "Investors", gradClass: "grad-1" },
  { id: 2, target: 96, suffix: "+", label: "Assets", gradClass: "grad-2" },
  { id: 3, target: 879, suffix: "", label: "Objects", gradClass: "grad-3" },
];

function CounterItem({ target, suffix, label, gradClass, startCounting }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let current = 0;
    const duration = 3500; // 1.8 seconds mein counting poori hogi
    const stepTime = 20; // har 20ms baad update
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [startCounting, target]);

  return (
    <div className="stat-box">
      <h2 className={`stat-number ${gradClass}`}>
        {count}
        {suffix}
      </h2>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Aik baar chalne ke baad dubara restart na ho
        }
      },
      { threshold: 0.3 } // Jab section ka 30% hissa nazar aaye
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        {statsData.map((item) => (
          <CounterItem
            key={item.id}
            target={item.target}
            suffix={item.suffix}
            label={item.label}
            gradClass={item.gradClass}
            startCounting={isVisible}
          />
        ))}
      </div>
    </section>
  );
}