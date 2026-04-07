 const Gradient = () => {
  return (
    <div>
      <div
        className="blur-3xl pointer-events-none z-[-99] pulse-slow "
        style={{
          top: "-10%",
          left: "0%",
         width: "50vw",       
          height: "200vh", 
          position: "absolute",
          borderRadius: "50%",
          rotate: "-40deg",
          background:
            "radial-gradient(ellipse at top right, rgba(212, 255, 188, 1) 0%, rgba(15, 15, 15, 0) 60%)",
        }}
      />
    </div>
  );
 };

 export default Gradient;
