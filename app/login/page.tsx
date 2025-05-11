'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';

type FormData = {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
};

type PasswordRequirement = {
  label: string;
  validator: (password: string) => boolean;
  id: string;
};

type PasswordField = 'password' | 'confirmPassword';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    password: '',
    passwordMatch: ''
  });
  const [passwordRequirements, setPasswordRequirements] = useState<{
    [key: string]: boolean;
  }>({});

  // Strong password requirements
  const requirements: PasswordRequirement[] = [
    {
      id: 'length',
      label: 'At least 8 characters',
      validator: (pass) => pass.length >= 8
    },
    {
      id: 'uppercase',
      label: 'At least 1 uppercase letter',
      validator: (pass) => /[A-Z]/.test(pass)
    },
    {
      id: 'lowercase',
      label: 'At least 1 lowercase letter',
      validator: (pass) => /[a-z]/.test(pass)
    },
    {
      id: 'number',
      label: 'At least 1 number',
      validator: (pass) => /[0-9]/.test(pass)
    },
    {
      id: 'special',
      label: 'At least 1 special character',
      validator: (pass) => /[!@#$%^&*(),.?":{}|<>]/.test(pass)
    }
  ];

  useEffect(() => {
    if (!isLogin && formData.password) {
      const newRequirements: { [key: string]: boolean } = {};
      requirements.forEach((req) => {
        newRequirements[req.id] = req.validator(formData.password);
      });
      setPasswordRequirements(newRequirements);

      // Set password error if requirements aren't met
      const passwordError = !Object.values(newRequirements).every(Boolean) 
        ? 'Password does not meet requirements' 
        : '';
      setErrors(prev => ({ ...prev, password: passwordError }));
    }
  }, [formData.password, isLogin]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(phone);
  };

  const isPasswordStrong = () => {
    return Object.values(passwordRequirements).every(Boolean);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value && !validateEmail(value) ? 'Please enter a valid email' : ''
      }));
    }
    if (name === 'phone') {
      setErrors(prev => ({
        ...prev,
        phone: value && !validatePhone(value) ? 'Please enter a valid phone number' : ''
      }));
    }
    if ((name === 'password' || name === 'confirmPassword') && formData.password && formData.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        passwordMatch: formData.password !== formData.confirmPassword ? 'Passwords do not match' : ''
      }));
    }
  };

  const togglePasswordVisibility = (field: PasswordField) => {
    if (field === 'password') {
      setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }));
    } else {
      setFormData(prev => ({ ...prev, showConfirmPassword: !prev.showConfirmPassword }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailValid = validateEmail(formData.email);
    const phoneValid = !formData.phone || validatePhone(formData.phone);
    const passwordsMatch = !isLogin ? formData.password === formData.confirmPassword : true;
    const passwordStrong = isLogin || isPasswordStrong();
    
    if (!isLogin && !emailValid) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
      return;
    }
    
    if (!isLogin && formData.phone && !phoneValid) {
      setErrors(prev => ({ ...prev, phone: 'Please enter a valid phone number' }));
      return;
    }

    if (!isLogin && !passwordStrong) {
      setErrors(prev => ({ ...prev, password: 'Password does not meet requirements' }));
      return;
    }

    if (!isLogin && !passwordsMatch) {
      setErrors(prev => ({ ...prev, passwordMatch: 'Passwords do not match' }));
      return;
    }

    console.log(isLogin ? 'Logging in' : 'Registering', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5E7EB] to-[#F3F4F6] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5E7EB]">
          <div className="flex border-b border-[#E5E7EB]">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-4 px-6 text-center font-medium text-lg focus:outline-none transition-colors ${
                isLogin 
                  ? 'text-[#4B5563] bg-[#F3F4F6] font-semibold' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-[#F3F4F6]'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-4 px-6 text-center font-medium text-lg focus:outline-none transition-colors ${
                !isLogin 
                  ? 'text-[#4B5563] bg-[#F3F4F6] font-semibold' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-[#F3F4F6]'
              }`}
            >
              Register
            </button>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4B5563] mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-[#4B5563]">
                {isLogin ? 'Sign in to your account' : 'Join our consultancy network'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#4B5563] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:ring-2 focus:ring-[#4B5563] focus:border-transparent transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-[#4B5563] mb-1">
                      Username *
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:ring-2 focus:ring-[#4B5563] focus:border-transparent transition"
                      placeholder="johndoe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4B5563] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:ring-2 focus:ring-[#4B5563] focus:border-transparent transition"
                      placeholder="+1234567890"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </motion.div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4B5563] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-[#E5E7EB]'
                  } focus:ring-2 focus:ring-[#4B5563] focus:border-transparent transition`}
                  placeholder="your@email.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4B5563] mb-1">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={formData.showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.password ? 'border-red-500' : 'border-[#E5E7EB]'
                    } focus:ring-2 focus:ring-[#4B5563] focus:border-transparent transition`}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('password')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#4B5563]"
                  >
                    {formData.showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}

                {!isLogin && formData.password && (
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-[#4B5563]">Password must contain:</p>
                    <ul className="space-y-1">
                      {requirements.map((req) => (
                        <li key={req.id} className="flex items-center">
                          {passwordRequirements[req.id] ? (
                            <FaCheck className="text-green-500 mr-2 text-xs" />
                          ) : (
                            <FaTimes className="text-red-500 mr-2 text-xs" />
                          )}
                          <span className={`text-xs ${
                            passwordRequirements[req.id] ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {req.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#4B5563] mb-1">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={formData.showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.passwordMatch ? 'border-red-500' : 'border-[#E5E7EB]'
                      } focus:ring-2 focus:ring-[#4B5563] focus:border-transparent transition`}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('confirmPassword')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#4B5563]"
                    >
                      {formData.showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.passwordMatch && (
                    <p className="mt-1 text-sm text-red-600">{errors.passwordMatch}</p>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#4B5563] focus:ring-[#4B5563] border-[#E5E7EB] rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-[#4B5563]">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-[#4B5563] hover:text-[#374151]">
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#4B5563] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#374151] transition-all duration-300 shadow-sm"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </motion.button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E5E7EB]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-[#4B5563]">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={() => console.log('Google sign in')}
                    className="w-full flex items-center justify-center px-4 py-2 border border-[#E5E7EB] rounded-lg shadow-sm text-sm font-medium text-[#4B5563] bg-white hover:bg-[#F3F4F6]"
                  >
                    <FcGoogle className="w-5 h-5 mr-2" />
                    Google
                  </button>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={() => console.log('Twitter sign in')}
                    className="w-full flex items-center justify-center px-4 py-2 border border-[#E5E7EB] rounded-lg shadow-sm text-sm font-medium text-[#4B5563] bg-white hover:bg-[#F3F4F6]"
                  >
                    <FaTwitter className="w-5 h-5 mr-2 text-blue-400" />
                    Twitter
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#4B5563]">
            {isLogin ? (
              <>
                New to ValleyGate?{' '}
                <button 
                  onClick={() => setIsLogin(false)} 
                  className="font-medium text-[#4B5563] hover:text-[#374151]"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button 
                  onClick={() => setIsLogin(true)} 
                  className="font-medium text-[#4B5563] hover:text-[#374151]"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </motion.div>
    </div>
  );
}