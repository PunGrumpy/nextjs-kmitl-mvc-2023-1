import React from 'react'
import toast, { ToastBar, Toaster } from 'react-hot-toast'

export default function ToasterNotification() {
  return (
    <React.Fragment>
      <Toaster
        position="bottom-right"
        key={Math.random()}
        gutter={10}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff'
          },
          success: {
            style: {
              background: '#435334',
              color: '#CEDEBD'
            }
          },
          error: {
            style: {
              background: '#E2C799',
              color: '#9A3B3B'
            }
          },
          loading: {
            style: {
              background: '#352F44',
              color: '#B9B4C7'
            }
          }
        }}
      >
        {t => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button onClick={() => toast.dismiss(t.id)}>&times;</button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </React.Fragment>
  )
}
