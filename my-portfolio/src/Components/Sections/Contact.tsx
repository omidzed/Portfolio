import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../../Hooks/useDarkMode';

export const Contact = () => {
	const [state, handleSubmit, reset] = useForm('xnnakdde');
	const [showModal, setShowModal] = useState(false);

	const { isDark } = useDarkMode();

	useEffect(() => {
		if (state.succeeded) {
			setShowModal(true);
			setTimeout(() => {
				setShowModal(false);
				reset();
			}, 4000);
		}
	}, [state.succeeded, reset]);

	const inputStyle = `p-2 rounded-md lg:mx-2 ${isDark ? 'bg-white text-black' : 'bg-white text-[#071236] border border-[#071236]'}`;

	return (
		<div className='flex flex-col'>
			<h1 className='mb-1 mt-20 md:mt-28 text-2xl'>Contact</h1>
			<div className={`${isDark ? 'border-gray-300' : 'border-[#071236]'} border-b mb-2`}></div>
			<div className={`flex justify-center ${isDark ? 'bg-[#071236] text-white' : 'bg-[#7eaed2] text-[#071236]'}'}`}>
				{showModal && (
					<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
						<div className='bg-white p-6 rounded shadow-lg'>
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
