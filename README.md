# 📌 Basic React Concepts

A collection of fundamental React concepts with explanations and example code snippets.

---

## 📜 Covered Concepts
✅ Components & Props  
✅ useState Hook  
✅ useEffect Hook  
✅ Controlled & Uncontrolled Components  
✅ Context API  
✅ useReducer  
✅ useMemo & useCallback  
✅ Custom Hooks  
✅ Lazy Loading & Code Splitting  
✅ Error Boundaries  

---

## 🛠️ Tech Stack
- **React** (Fundamentals)  
- **JavaScript (ES6+)**  

---

## 📂 How to Use This Repository
1. Clone the repo:  
   ```sh
   git clone https://github.com/your-username/basic-react-concepts.git
   ```
2. Navigate to a concept folder:  
   ```sh
   cd basic-react-concepts/hooks
   ```
3. Open the code in your favorite editor (VS Code recommended) and experiment!  

---

## 📷 Example Snippet (useState Hook)
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

---

## 💡 Future Additions
🔹 More advanced concepts  
🔹 Real-world examples  

