export default function Home3DSpline() {

  return (
    <div className="relative h-screen w-full">

      {/* Spline container */}
      <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
      <iframe
          src="https://my.spline.design/3dtextbluecopy-4a1c3df019713d7aed27a5ea3fcf4a30/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="3D Scene"
        />
      </div>

    </div>
  );
}