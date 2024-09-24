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
		<div className='flex justify-center'>
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
					className='font-medium'
					htmlFor='name'>
					Name
				</label>
				<input
					id='name'
					type='text'
					name='name'
					aria-label='Name'
					className=' p-2 rounded-md'
				/>
				<ValidationError
					prefix='Name'
					field='name'
					errors={state.errors}
				/>
				<label
					className='mt-2 font-medium'
					htmlFor='email'>
					Email Address
				</label>
				<input
					id='email'
					type='email'
					name='email'
					aria-label='Email Address'
					className='p-2  rounded-md'
				/>
				<ValidationError
					prefix='Email'
					field='email'
					errors={state.errors}
				/>
				<label
					className='font-medium mt-2'
					htmlFor='message'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					aria-label='Message'
					style={{ height: '150px' }}
					className=' p-2 rounded-md text-black h-32'
				/>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
				<button
					type='submit'
					disabled={state.submitting}
					className='mt-4 px-4 py-2 mx-20 bg-green-600 text-white font-medium rounded hover:bg-green-600 disabled:bg-gray-300'>
					Submit
				</button>
			</form>
		</div>
	);
};
