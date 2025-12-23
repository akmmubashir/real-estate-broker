"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface EnquiryContextValue {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

const EnquiryContext = createContext<EnquiryContextValue | undefined>(undefined)

export const EnquiryProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <EnquiryContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </EnquiryContext.Provider>
    )
}

export const useEnquiryModal = () => {
    const ctx = useContext(EnquiryContext)
    if (!ctx) throw new Error('useEnquiryModal must be used within EnquiryProvider')
    return ctx
}
