import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../../Hooks/useDarkMode';

export const Contact = () => {
	const [state, handleSubmit, reset] = useForm('xnnakdde');
	const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
			name: '',
			email: '',
			message: '',
		});

	const { isDark } = useDarkMode();

  useEffect(() => {
		if (state.succeeded) {
			setShowModal(true);
			setTimeout(() => {
				setShowModal(false);
				reset();
				setFormData({ name: '', email: '', message: '' }); // Manually reset form data
			}, 5000);
		}
	}, [state.succeeded, reset]);

   const handleChange = event => {
			const { name, value } = event.target;
			setFormData(prev => ({ ...prev, [name]: value }));
		};

	const inputStyle = `p-2 rounded-md lg:mx-2 ${isDark ? 'bg-white text-black' : 'bg-white text-[#071236] border border-[#071236]'}`;

	return (
		<div className='flex flex-col'>
			<h1 className='mb-1 mt-20 md:mt-28 text-2xl'>Contact</h1>
			<div className={`${isDark ? 'border-gray-300' : 'border-[#071236]'} border-b mb-2`}></div>
			<div className={`flex justify-center ${isDark ? 'bg-[#071236] text-white' : 'bg-[#7eaed2] text-[#071236]'}'}`}>
				{showModal && (
					<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
						<div className='bg-white text-black p-6 rounded shadow-lg'>
							<p>Thank you for reaching out! I look forward to discussing potential opportunities and projects with you soon.</p>
						</div>
					</div>
				)}
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-2 my-10 w-5/6'>
					<label
						className='font-medium lg:ml-2'
						htmlFor='name'>
						Name
					</label>
					<input
						id='name'
						type='text'
						name='name'
						aria-label='Name'
						className={inputStyle}
						value={formData.name}
						onChange={handleChange}
					/>
					<ValidationError
						prefix='Name'
						field='name'
						errors={state.errors}
					/>
					<label
						className='font-medium lg:ml-2'
						htmlFor='email'>
						Email Address
					</label>
					<input
						id='email'
						type='email'
						name='email'
						aria-label='Email Address'
						className={inputStyle}
						value={formData.email}
						onChange={handleChange}
					/>
					<ValidationError
						prefix='Email'
						field='email'
						errors={state.errors}
					/>
					<label
						className='font-medium lg:ml-2'
						htmlFor='message'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						aria-label='Message'
						style={{ height: '150px' }}
						className={`${inputStyle} p-2 rounded-md text-black h-32`}
						value={formData.message}
						onChange={handleChange}
					/>
					<ValidationError
						prefix='Message'
						field='message'
						errors={state.errors}
					/>
					<div className='flex justify-center'>
						<button
							type='submit'
							disabled={state.submitting}
							className={`mt-4 px-10 py-2 mx-20 lg:mx-40 border ${isDark ? 'border-gray-300' : 'bg-[#071236]'}  text-white font-medium rounded hover:bg-blue-600 disabled:bg-gray-300`}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
