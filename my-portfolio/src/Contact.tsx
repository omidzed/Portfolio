import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

export const Contact = () => {
	const [state, handleSubmit, reset] = useForm('xnnakdde');
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (state.succeeded) {
			setShowModal(true);
			setTimeout(() => {
				setShowModal(false);
				reset();
			}, 4000);
		}
	}, [state.succeeded, reset]);

	return (
		<>
			{showModal && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
					<div className='bg-white p-6 rounded shadow-lg'>
						<p>Thank you for reaching out! I look forward to discussing potential opportunities and projects with you soon.</p>
					</div>
				</div>
			)}
			<form
				onSubmit={handleSubmit}
				className='flex flex-col w-1/2 mt-10'>
				<label htmlFor='name'>Name</label>
				<input
					id='name'
					type='text'
					name='name'
					aria-label='Name'
					className='mt-1 p-2 border rounded'
				/>
				<ValidationError
					prefix='Name'
					field='name'
					errors={state.errors}
				/>
				<label
					className='mt-4'
					htmlFor='email'>
					Email Address
				</label>
				<input
					id='email'
					type='email'
					name='email'
					aria-label='Email Address'
					className='mt-1 p-2 border rounded'
				/>
				<ValidationError
					prefix='Email'
					field='email'
					errors={state.errors}
				/>
				<label
					className='mt-4'
					htmlFor='message'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					aria-label='Message'
					className='mt-1 p-2 border rounded'
				/>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
				<button
					type='submit'
					disabled={state.submitting}
					className='mt-8 px-4 py-2 mx-20 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300'>
					Submit
				</button>
			</form>
		</>
	);
};
