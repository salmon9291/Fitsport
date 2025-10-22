import { useState } from 'react';
import AuthModal from '../AuthModal';
import { Button } from '@/components/ui/button';

export default function AuthModalExample() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="p-6">
      <Button onClick={() => setOpen(true)}>Open Auth Modal</Button>
      <AuthModal
        open={open}
        onOpenChange={setOpen}
        onLogin={(username, password) => console.log('Login:', username, password)}
        onSignup={(username, password) => console.log('Signup:', username, password)}
      />
    </div>
  );
}
